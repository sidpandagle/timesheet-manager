import { Link } from "@remix-run/react";

export default function About() {

  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8 overflow-auto h-[calc(100vh-40px)]">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 h-[400px]">
        <div className="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24 h-full">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <p className="hidden text-white/90 sm:mt-4 sm:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
              sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet
              volutpat quisque ut interdum tincidunt duis.
            </p>

            <div className="mt-4 md:mt-8">
              <Link
                to="/"
                className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2 h-full">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
            className="w-full object-cover h-[500px]"
          />

          <img
            alt=""
            src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="w-full object-cover h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}

