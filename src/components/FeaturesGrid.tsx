export function FeaturesGrid(props: any) {
  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        {props.t1}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
            {props.t2}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{props.t3}</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
            {props.t4}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{props.t5}</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
            {props.t6}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{props.t7}</p>
        </div>
      </div>
    </section>
  );
}
