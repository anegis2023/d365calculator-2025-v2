import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import { FaFileExcel, FaTrash, FaEye } from 'react-icons/fa';
import { generateExcelFile } from '../utils/excelExport';
import { ModuleSelection } from '../types';
import { AdminModuleReview } from './AdminModuleReview'; 

interface FormSubmission {
  id: string;
  company_name: string;
  nip: string;
  employees: string;
  industry: string;
  first_name: string;
  last_name: string;
  position: string;
  email: string;
  phone: string;
  requirements: string;
  privacy_accepted: boolean;
  marketing_accepted: boolean;
  created_at: string;
  selected_modules: ModuleSelection[];
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    checkAdmin();
    fetchSubmissions();
  }, []);

  const checkAdmin = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate('/');
        return;
      }

      const { data, error } = await supabase
        .from('profiles')
        .select('is_admin')
        .eq('id', user.id)
        .single();

      if (error || !data?.is_admin) {
        navigate('/');
      }
    } catch (err) {
      console.error('Error checking admin status:', err);
      navigate('/');
    }
  };

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('form_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (submissionId: string) => {
    if (window.confirm('Czy na pewno chcesz usunąć to zgłoszenie? Tej operacji nie można cofnąć.')) {
      try {
        console.log('Attempting to delete submission:', submissionId);

        // Perform the delete operation
        const { error: deleteError } = await supabase
          .from('form_submissions')
          .delete()
          .eq('id', submissionId);

        if (deleteError) {
          console.error('Error deleting from Supabase:', deleteError);
          throw deleteError;
        }

        console.log('Successfully deleted submission from Supabase');

        // Update local state
        setSubmissions(prevSubmissions => 
          prevSubmissions.filter(sub => sub.id !== submissionId)
        );

        // Show success message
        alert('Zgłoszenie zostało pomyślnie usunięte.');

        // Refresh the submissions list
        await fetchSubmissions();
      } catch (err) {
        console.error('Error deleting submission:', err);
        alert('Wystąpił błąd podczas usuwania zgłoszenia.');
      }
    }
  };

  if (loading) return (
    <div className="container mx-auto p-4 mt-16">
      <div className="text-center">Loading...</div>
    </div>
  );
  
  if (error) return (
    <div className="container mx-auto p-4 mt-16">
      <div className="text-red-600">Error: {error}</div>
    </div>
  );

  return (
    <div className="container mx-auto p-4 mt-16">
      <h1 className="text-2xl font-bold mb-4">Panel Admina</h1>
      <div className="space-y-4">
        {submissions.map((submission) => (
          <div key={submission.id} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="text-lg font-semibold">
                Data zgłoszenia: {new Date(submission.created_at).toLocaleString('pl-PL', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                }).replace(',', '')}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedSubmission(submission)}
                  className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  title="Podgląd szczegółów"
                >
                  <FaEye className="text-xl" />
                  <span className="hidden sm:inline">Podgląd</span>
                </button>
                <button
                  onClick={() => generateExcelFile(submission)}
                  className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                  title="Eksportuj do Excel"
                >
                  <FaFileExcel className="text-xl" />
                  <span className="hidden sm:inline">Eksportuj</span>
                </button>
                <button
                  onClick={() => handleDelete(submission.id)}
                  className="flex items-center gap-2 px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                  title="Usuń zgłoszenie"
                >
                  <FaTrash className="text-xl" />
                  <span className="hidden sm:inline">Usuń</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div><span className="font-semibold">Nazwa firmy:</span> {submission.company_name}</div>
                <div><span className="font-semibold">NIP:</span> {submission.nip}</div>
                <div><span className="font-semibold">Liczba pracowników:</span> {submission.employees}</div>
                <div><span className="font-semibold">Branża:</span> {submission.industry}</div>
              </div>
              <div className="space-y-2">
                <div><span className="font-semibold">Imię:</span> {submission.first_name}</div>
                <div><span className="font-semibold">Nazwisko:</span> {submission.last_name}</div>
                <div><span className="font-semibold">Stanowisko:</span> {submission.position}</div>
                <div><span className="font-semibold">Email:</span> {submission.email}</div>
              </div>
              <div className="space-y-2">
                <div><span className="font-semibold">Telefon:</span> {submission.phone}</div>
                <div><span className="font-semibold">Dodatkowe wymagania:</span> {submission.requirements}</div>
                <div><span className="font-semibold">Akceptacja polityki prywatności:</span> {submission.privacy_accepted ? 'Tak' : 'Nie'}</div>
                <div><span className="font-semibold">Zgody marketingowe:</span> {submission.marketing_accepted ? 'Tak' : 'Nie'}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedSubmission && (
        <AdminModuleReview
          submission={selectedSubmission}
          onClose={() => setSelectedSubmission(null)}
        />
      )}
    </div>
  );
}
