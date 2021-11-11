import { supabase } from '../utils/supabase';
import { Resource } from './types';

export const fetchAllResources = async () => {
  const { data, error} = await supabase
  .from<Resource>('Resources')
  .select(`*`, { count: 'exact' })
  return {data, error};
}
  
