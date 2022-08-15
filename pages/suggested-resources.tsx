import { useState, useEffect } from 'react'
import { supabase, } from '../utils/supabase';
import { AuthSession } from '@supabase/supabase-js';
import {useRouter} from 'next/router';
import Auth from './auth';
import Dashboard from './playlists';

export default function SuggestedResources() {
  const router = useRouter()
  const [session, setSession] = useState<AuthSession | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event: string, session: AuthSession | null) => {
      setSession(session)
    })
  }, [])

  return (
    <>
      {!session ? <Auth />  : <div>Something new</div> }
    </>
  )
}