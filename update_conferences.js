const fs = require('fs');

const idPath = './src/lang/id.json';
const enPath = './src/lang/en.json';

const idJson = JSON.parse(fs.readFileSync(idPath, 'utf8'));
const enJson = JSON.parse(fs.readFileSync(enPath, 'utf8'));

const newTranslationsId = {
  'Student Projects and Creations': 'Hasil Karya dan Proyek Peserta',
  'Check out the exciting games, websites, and apps created by our students. Learning to code is not just about theory, but about building something real.': 'Lihat berbagai game, website, dan aplikasi menarik yang berhasil diciptakan oleh para peserta kami. Belajar coding bukan hanya teori, tapi tentang menciptakan sesuatu yang nyata.',
  'Start Building Your Project': 'Mulai Buat Proyek Anda'
};

const newTranslationsEn = Object.keys(newTranslationsId).reduce((acc, key) => {
  acc[key] = key;
  return acc;
}, {});

const oldIndoKeys = [
  'Hasil Karya dan Proyek Peserta',
  'Lihat berbagai game, website, dan aplikasi menarik yang berhasil diciptakan oleh para peserta kami. Belajar coding bukan hanya teori, tapi tentang menciptakan sesuatu yang nyata.',
  'Mulai Buat Proyek Anda'
];

oldIndoKeys.forEach(key => {
  delete idJson[key];
  delete enJson[key];
});

Object.assign(idJson, newTranslationsId);
Object.assign(enJson, newTranslationsEn);

fs.writeFileSync(idPath, JSON.stringify(idJson, null, 2));
fs.writeFileSync(enPath, JSON.stringify(enJson, null, 2));

console.log('Conferences translations updated successfully.');
