import { supabase } from '../utils/supabase'
import { Resource } from './types';


export const fetchResources = async ({queryKey}: any) => {
  const { data, error} = await supabase
  .from<Resource>('Resources')
  .select(`*`)
  .filter("tag", "eq", queryKey[1])
  return {data, error};
}
  
