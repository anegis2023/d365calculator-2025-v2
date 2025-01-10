import AdminDashboard from '../components/AdminDashboard';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../lib/supabase';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Session } from '@supabase/supabase-js';
import { Navbar } from '../components/Navbar';

export default function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (!session) {
    return (
      <div className="min-h-screen bg-[#faf9f8]">
        <Navbar onLogoClick={() => navigate('/')} />
        <div className="container mx-auto p-4 max-w-md mt-16">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <Auth
            supabaseClient={supabase}
            appearance={{ 
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#0078d4',
                    brandAccent: '#106ebe',
                  }
                }
              }
            }}
            providers={[]}
            redirectTo={window.location.origin + '/admin'}
            showLinks={false}
            view="sign_in"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f8]">
      <Navbar 
        onLogoClick={() => navigate('/')} 
        isAdmin={true}
        userEmail={session.user.email}
        onLogout={handleLogout}
      />
      <AdminDashboard />
    </div>
  );
}
