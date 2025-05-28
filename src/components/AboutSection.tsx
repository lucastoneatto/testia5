export function AboutSection(props: any) {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        {props.t1}
      </h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
        {props.t2}
      </p>
    </section>
  );
}
