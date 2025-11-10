
import React from 'react';
import type { SearchResult } from '../types';
import { AddressIcon, EmailIcon, PhoneIcon, WebIcon, StarIcon, StarFilledIcon } from './icons';

interface ResultCardProps {
  result: SearchResult;
  isFavorite: boolean;
  onToggleFavorite: () => void;
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
    <div className="flex items-start justify-between py-3 border-b border-gray-200 last:border-b-0">
      <div className="flex items-center gap-3 text-gray-800">
        {icon}
        {content}
      </div>
      <span className="font-bold text-gray-600 whitespace-nowrap">{label}</span>
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

const ResultCard: React.FC<ResultCardProps> = ({ result, isFavorite, onToggleFavorite }) => {
  const { wilaya, baladiya } = result;

  return (
    <div className="w-full bg-white shadow-xl rounded-xl p-6 sm:p-8 text-right border-t-8 border-[#004aad]">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-extrabold text-[#004aad] mb-2">النتيجة</h2>
          <p className="text-gray-500 mb-6">
            الاختصاص الإقليمي لبلدية <span className="font-bold">{baladiya.baladiya}</span>
          </p>
        </div>
        <button 
          onClick={onToggleFavorite}
          className="p-2 rounded-full hover:bg-yellow-100 transition-colors text-yellow-500"
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? <StarFilledIcon className="h-8 w-8" /> : <StarIcon className="h-8 w-8" />}
        </button>
      </div>

      <div className="space-y-4 text-lg">
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-bold text-gray-600">الولاية</p>
          <p className="text-xl font-bold text-gray-900">{wilaya.wilaya} ({wilaya.code_wilaya})</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-bold text-gray-600">المجلس القضائي</p>
          <p className="text-xl font-bold text-gray-900">{wilaya.majlis_qadaa}</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border-r-4 border-blue-500">
          <p className="font-bold text-blue-800">المحكمة المختصة</p>
          <p className="text-2xl font-bold text-blue-900">{baladiya.mahkama_mokhtassa}</p>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t-2 border-dashed">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">تفاصيل المحكمة وموقعها</h3>
        <div className="flex flex-col text-md">
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
