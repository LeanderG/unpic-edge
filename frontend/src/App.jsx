import { createUniqueId } from "solid-js";

function Input(props) {
  const id = createUniqueId();
  return (
    <div>
      <label
        for={id}
        class="block text-sm font-semibold leading-6 text-gray-900"
      >
        {props.label}
      </label>
      <div class="mt-2.5">
        <input
          type="text"
          name={props.label}
          id={id}
          class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <div class="bg-gradient-to-br from-slate-50 to-slate-200 min-h-screen">
      <header class="max-w-2xl mx-auto px-2">
        <h1 class="text-5xl text-center md:text-left uppercase pt-8">
          unpic edge
        </h1>
        <h2 class="text-2xl pt-2">
          Generate responsive, high-performance images using image CDNs
        </h2>
      </header>
      <main class="max-w-2xl mx-auto px-2 py-4">
        <form action="http://www.example.com" method="GET">
          <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <Input label="src"></Input>
            <Input label="height"></Input>
            <Input label="width"></Input>
            <Input label="layout"></Input>
            <Input label="class"></Input>
          </div>
          <div class="pt-8">
            <button
              type="submit"
              class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Generate
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
