import React from 'react';
import type { SearchResult } from '../types';
import { AddressIcon, EmailIcon, PhoneIcon, WebIcon } from './icons';

interface ResultCardProps {
  result: SearchResult;
}

const InfoRow: React.FC<{ label: string; value?: string; icon: React.ReactNode; href?: string }> = ({ label, value, icon, href }) => {
  if (!value) return null;

  const content = href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600 break-words">
      {value}
    </a>
  ) : (
    <span className="break-words">{value}</span>
  );

  return (
    <div className="flex items-start gap-4 py-4 border-b border-gray-200 last:border-b-0">
       <div className="flex-grow text-right">
        <p className="font-bold text-gray-600 text-base">{label}</p>
        <div className="text-gray-800 text-base">{content}</div>
      </div>
      <div className="flex-shrink-0 pt-1">
        {icon}
      </div>
    </div>
  );
};

const MapEmbed: React.FC<{ address: string }> = ({ address }) => {
  if (!address) return null;
  const encodedAddress = encodeURIComponent(address);
  const mapSrc = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="mt-6 rounded-lg overflow-hidden border-2 border-gray-200">
      <iframe
        width="100%"
        height="300"
        src={mapSrc}
        title={`Map for ${address}`}
        aria-label={`Map for ${address}`}
        frameBorder="0"
        scrolling="no"
        loading="lazy"
      ></iframe>
    </div>
  );
};

const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  const { wilaya, baladiya } = result;

  return (
    <div className="w-full bg-white shadow-xl rounded-xl p-6 sm:p-8 text-right border-t-8 border-[#004aad]">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004aad] mb-2">النتيجة</h2>
          <p className="text-gray-500 mb-6">
            الاختصاص الإقليمي لبلدية <span className="font-bold">{baladiya.baladiya}</span>
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-bold text-gray-600">الولاية</p>
          <p className="text-lg sm:text-xl font-bold text-gray-900">{wilaya.wilaya} ({wilaya.code_wilaya})</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-bold text-gray-600">المجلس القضائي</p>
          <p className="text-lg sm:text-xl font-bold text-gray-900">{wilaya.majlis_qadaa}</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border-r-4 border-blue-500">
          <p className="font-bold text-blue-800">المحكمة المختصة</p>
          <p className="text-2xl sm:text-3xl font-black text-blue-900 tracking-wide">{baladiya.mahkama_mokhtassa}</p>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t-2 border-dashed">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">تفاصيل المحكمة وموقعها</h3>
        <div className="flex flex-col">
            <InfoRow label="العنوان" value={baladiya.adresse} icon={<AddressIcon />} />
            <InfoRow label="رقم الهاتف" value={baladiya.telephone} icon={<PhoneIcon />} href={`tel:${baladiya.telephone}`} />
            <InfoRow label="البريد الإلكتروني" value={baladiya.email} icon={<EmailIcon />} href={`mailto:${baladiya.email}`} />
            <InfoRow label="الموقع الإلكتروني" value={baladiya.site_web} icon={<WebIcon />} href={baladiya.site_web} />
        </div>
        <MapEmbed address={baladiya.adresse} />
      </div>
    </div>
  );
};

export default ResultCard;
