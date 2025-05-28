export function TestimonialSection(props: any) {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        {props.t1}
      </h2>
      <div className="max-w-2xl mx-auto space-y-8">
        <blockquote className="border-l-4 border-blue-600 pl-4">
          <p className="italic text-gray-700 dark:text-gray-300">{props.t2}</p>
          <cite className="block mt-2 font-bold text-gray-900 dark:text-white">
            {props.t3}
          </cite>
        </blockquote>
        <blockquote className="border-l-4 border-blue-600 pl-4">
          <p className="italic text-gray-700 dark:text-gray-300">{props.t4}</p>
          <cite className="block mt-2 font-bold text-gray-900 dark:text-white">
            {props.t5}
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
