const fs = require('fs');

const idPath = './src/lang/id.json';
const enPath = './src/lang/en.json';

const idJson = JSON.parse(fs.readFileSync(idPath, 'utf8'));
const enJson = JSON.parse(fs.readFileSync(enPath, 'utf8'));

const newTranslationsId = {
  'Choose Your Learning Method': 'Pilih Cara Belajar Anda',
  'Private Coding Classes Direct to Your Home': 'Private Coding Class Langsung ke Rumah Anda',
  'Coding courses for kids, teens, and adults with options for private classes at home, small groups, offline, and online. Learning programs are tailored to the age, skill level, and goals of each student.': 'Kursus coding untuk anak, remaja, dan dewasa dengan pilihan kelas private ke rumah, kelompok kecil, offline, dan online. Program belajar disesuaikan dengan usia, tingkat kemampuan, serta tujuan setiap peserta.',
  'Ask for Schedule via WhatsApp': 'Tanya Jadwal via WhatsApp',
  'View Program Options': 'Lihat Pilihan Program',
  'Learn Through Practice': 'Belajar Lewat Praktek',
  'Coding for Kids': 'Coding untuk Anak',
  'Fun foundational programs to introduce logic, creativity, game development, animation, and technology.': 'Program dasar yang menyenangkan untuk mengenalkan logika, kreativitas, pembuatan game, animasi, dan teknologi.',
  'Coding for Teens': 'Coding untuk Remaja',
  'Advanced programs to build games, websites, apps, and learn programming languages.': 'Program lanjutan untuk membuat game, website, aplikasi, dan mempelajari bahasa pemrograman.',
  'Coding for Adults': 'Coding untuk Dewasa',
  'Programs for beginners, university students, professionals, or anyone wanting to improve coding skills for academics, work, business, or career development.': 'Program untuk pemula, mahasiswa, pekerja, atau peserta yang ingin meningkatkan keterampilan coding untuk kebutuhan akademik, pekerjaan, bisnis, atau pengembangan karier.',
  'Program Options by Age': 'Pilihan Program Berdasarkan Usia',
  'Find the right coding class for your needs.': 'Temukan kelas coding yang tepat untuk kebutuhan Anda.',
  'Private at Home': 'Private ke Rumah',
  'The mentor comes directly to the student\'s home. Schedule and materials can be adjusted to learning needs.': 'Mentor datang langsung ke rumah peserta. Jadwal dan materi dapat disesuaikan dengan kebutuhan belajar.',
  'Learn in a small group so students still get the mentor\'s attention.': 'Belajar dalam kelompok kecil agar peserta tetap mendapatkan perhatian dari mentor.',
  'Offline Class': 'Kelas Offline',
  'Learn in person at the Uma Coding class location.': 'Belajar secara langsung di lokasi kelas Uma Coding.',
  'Online Class': 'Kelas Online',
  'Learn live with a mentor from anywhere.': 'Belajar secara live bersama mentor dari mana saja.',
  'Choose the Right Learning Method': 'Pilih Cara Belajar yang Sesuai',
  'We offer various flexible learning methods according to your needs.': 'Kami menawarkan berbagai metode pembelajaran yang fleksibel sesuai dengan kebutuhan Anda.'
};

const newTranslationsEn = Object.keys(newTranslationsId).reduce((acc, key) => {
  acc[key] = key;
  return acc;
}, {});

// Delete the old Indonesian keys from id and en so they don't pollute the translations
const oldIndoKeys = [
  'Pilih Cara Belajar Anda',
  'Private Coding Class Langsung ke Rumah Anda',
  'Kursus coding untuk anak, remaja, dan dewasa dengan pilihan kelas private ke rumah, kelompok kecil, offline, dan online. Program belajar disesuaikan dengan usia, tingkat kemampuan, serta tujuan setiap peserta.',
  'Tanya Jadwal via WhatsApp',
  'Lihat Pilihan Program',
  'Belajar Lewat Praktek',
  'Coding untuk Anak',
  'Program dasar yang menyenangkan untuk mengenalkan logika, kreativitas, pembuatan game, animasi, dan teknologi.',
  'Coding untuk Remaja',
  'Program lanjutan untuk membuat game, website, aplikasi, dan mempelajari bahasa pemrograman.',
  'Coding untuk Dewasa',
  'Program untuk pemula, mahasiswa, pekerja, atau peserta yang ingin meningkatkan keterampilan coding untuk kebutuhan akademik, pekerjaan, bisnis, atau pengembangan karier.',
  'Pilihan Program Berdasarkan Usia',
  'Temukan kelas coding yang tepat untuk kebutuhan Anda.',
  'Private ke Rumah',
  'Mentor datang langsung ke rumah peserta. Jadwal dan materi dapat disesuaikan dengan kebutuhan belajar.',
  'Small Group Class',
  'Belajar dalam kelompok kecil agar peserta tetap mendapatkan perhatian dari mentor.',
  'Kelas Offline',
  'Belajar secara langsung di lokasi kelas Uma Coding.',
  'Kelas Online',
  'Belajar secara live bersama mentor dari mana saja.',
  'Pilih Cara Belajar yang Sesuai',
  'Kami menawarkan berbagai metode pembelajaran yang fleksibel sesuai dengan kebutuhan Anda.'
];

oldIndoKeys.forEach(key => {
  delete idJson[key];
  delete enJson[key];
});

Object.assign(idJson, newTranslationsId);
Object.assign(enJson, newTranslationsEn);

fs.writeFileSync(idPath, JSON.stringify(idJson, null, 2));
fs.writeFileSync(enPath, JSON.stringify(enJson, null, 2));

console.log('Translations updated successfully.');
