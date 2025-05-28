export function CallToActionBlock(props: any) {
  return (
    <section className="py-16 px-4 bg-blue-600 dark:bg-blue-800 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">{props.t1}</h2>
      <p className="text-lg text-blue-200 mb-8">{props.t2}</p>
      <button className="mt-4 px-6 py-3 bg-white hover:bg-gray-200 dark:bg-transparent dark:hover:bg-gray-900 text-blue-600 dark:text-white rounded-lg">
        {props.t3}
      </button>
    </section>
  );
}
