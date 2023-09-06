'use client';

import {useTranslations} from 'next-intl';
import Link from "next-intl/link";

export default function About() {
  const t = useTranslations('About');

  return (
     <div className="flex flex-col gap-10">
       <Link href="/">Index</Link>
       <Link href="/about">About</Link>

       <Link href="/" locale="es">Traducir a Español</Link>
       <Link href="/" locale="en">Switch to English</Link>

       <h1 className="text-red-600">{t('title')}</h1>
     </div>
  )
}