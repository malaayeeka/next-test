export default function Footer() {
  return (
    <footer className="w-full p-4  bg-gray-800 text-white mt-8">
      <div className="container mx-auto text-center">
        <p>{new Date().getFullYear()} MySite. All right reserved</p>
      </div>
    </footer>
  );
}
