// Example usage of Supabase client
// This file demonstrates common Supabase operations

import { supabase } from './supabase'

// Example: Fetch all rows from a table
export async function fetchAllItems(tableName) {
  const { data, error } = await supabase
    .from(tableName)
    .select('*')
  
  if (error) {
    console.error('Error fetching items:', error)
    return null
  }
  
  return data
}

// Example: Insert a new row
export async function insertItem(tableName, item) {
  const { data, error } = await supabase
    .from(tableName)
    .insert([item])
    .select()
  
  if (error) {
    console.error('Error inserting item:', error)
    return null
  }
  
  return data
}

// Example: Update a row
export async function updateItem(tableName, id, updates) {
  const { data, error } = await supabase
    .from(tableName)
    .update(updates)
    .eq('id', id)
    .select()
  
  if (error) {
    console.error('Error updating item:', error)
    return null
  }
  
  return data
}

// Example: Delete a row
export async function deleteItem(tableName, id) {
  const { error } = await supabase
    .from(tableName)
    .delete()
    .eq('id', id)
  
  if (error) {
    console.error('Error deleting item:', error)
    return false
  }
  
  return true
}

// Example: Real-time subscription
export function subscribeToTable(tableName, callback) {
  const channel = supabase
    .channel(`${tableName}_changes`)
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: tableName,
      },
      callback
    )
    .subscribe()
  
  return () => {
    supabase.removeChannel(channel)
  }
}
