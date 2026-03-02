import Link from 'next/link';

export default function About() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>About</h1>
      <ul>
        <li><strong>Nama Mahasiswa:</strong> Febrian Arka Samudra</li>
        <li><strong>NIM:</strong> 2341720066</li>
        <li><strong>Program Studi:</strong> Informatics Engineering</li>
      </ul>
      <Link href="/">Kembali ke Beranda</Link>
    </div>
  );
}
