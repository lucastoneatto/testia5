export function HeroSection(props: any) {
  return (
    <header className="bg-gray-100 dark:bg-gray-900 text-center py-20 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {props.t1}
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        {props.t2}
      </p>
      <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-700 text-white rounded-lg">
        {props.t3}
      </button>
    </header>
  );
}
