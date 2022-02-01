import { useState } from 'react';
import { toast } from 'react-toastify';
import { supabase } from '../utils/supabase';
import LoginForm from '../components/forms/login';

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (email: string, password: 'string') => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({email: email, password: password});
      if (error) throw error
      toast.success('Check your email for the login link!')
    } catch (error) {
      toast.error("An error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center bg-white min-h-screen w-full">
      <LoginForm />
      
    </div>
  )
}