'use client';

import { useEffect } from 'react';
import { app } from '@/lib/firebase';
import { getAnalytics } from 'firebase/analytics';

/**
 * Инициализира Firebase Analytics само в браузъра.
 * Поставете в layout (вътре в body), за да започне проследяването.
 */
export default function FirebaseAnalytics() {
  useEffect(() => {
    try {
      getAnalytics(app);
    } catch (e) {
      console.warn('Firebase Analytics init failed:', e?.message);
    }
  }, []);
  return null;
}
