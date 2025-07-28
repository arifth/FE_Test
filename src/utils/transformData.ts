const transformData = (rawData:Array<any>) => {


const paymentFields = [
  'eMandiri', 'eBri', 'eBni', 'eBca',
  'eNobu', 'eDKI', 'eMega', 'eFlo'
];

// 1. Inisialisasi struktur per metode pembayaran
const totalsPerPayment : any = {};
paymentFields.forEach(payment => {
  totalsPerPayment[payment] = {};
});

// 2. Hitung total tiap metode per IdGerbang
rawData.forEach(item => {
  const gerbangId = item.IdGerbang.toString(); // convert ke string biar konsisten

  paymentFields.forEach(payment => {
    if (!totalsPerPayment[payment][gerbangId]) {
      totalsPerPayment[payment][gerbangId] = 0;
    }
    totalsPerPayment[payment][gerbangId] += item[payment];
  });
});

// 3. Ambil semua IdGerbang unik
const uniqueGerbangs = [
  ...new Set(rawData.map(item => item.IdGerbang.toString()))
];

// 4. Bentuk datasets per metode pembayaran
const datasets = paymentFields.map((payment, index) => {
  return {
    label: payment,
    data: uniqueGerbangs.map(gid => totalsPerPayment[payment][gid] || 0),
    backgroundColor: `rgba(${100 + index * 20}, ${150 - index * 10}, 200, 0.5)`
  };
});

const chartData = {
  labels: uniqueGerbangs,
  datasets
};

console.log(chartData);

}


export default transformData