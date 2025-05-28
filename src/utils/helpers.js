import { formatDistance, parseISO, differenceInDays } from "date-fns";
import { id } from "date-fns/locale"; // Untuk Bahasa Indonesia

// Menghitung selisih hari antara dua tanggal
export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

// Format jarak tanggal dari sekarang dalam bahasa Indonesia
export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
    locale: id,
  })
    .replace("sekitar ", "") // Hilangkan kata "sekitar"
    .replace("dalam", "Dalam"); // Kapitalisasi jika diperlukan

// Mendapatkan tanggal hari ini dalam bentuk ISO string, dengan opsi ke akhir hari
export const getToday = function (options = {}) {
  const today = new Date();

  if (options?.end) {
    // Set ke akhir hari (23:59:59.999 UTC)
    today.setUTCHours(23, 59, 59, 999);
  } else {
    // Set ke awal hari (00:00:00.000 UTC)
    today.setUTCHours(0, 0, 0, 0);
  }

  return today.toISOString();
};

// Format angka menjadi Rupiah (IDR)
export const formatCurrency = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // Hilangkan koma desimal jika tidak dibutuhkan
  }).format(value);
