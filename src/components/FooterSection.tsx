export function FooterSection(props: any) {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gray-700 dark:text-gray-300">{props.t1}</p>
      </div>
    </footer>
  );
}
