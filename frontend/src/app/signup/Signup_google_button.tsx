export function GoogleSignup() {
  return (
    <div className="mt-6">
      <button
        type="button"
        className="flex w-full items-center justify-center gap-3 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.000 4.000c-2.43 0-4.493 1.092-5.908 3.011l-1.464-1.424C5.16 3.655 8.167 2.000 12.000 2.000c3.483 0 6.425 1.156 8.526 3.078l-2.827 2.196C16.14 5.923 14.12 4.000 12.000 4.000z" />
          <path d="M2.000 12.000c0 1.621.365 3.179 1.058 4.606l2.196-2.827c-.496-1.121-.784-2.348-.784-3.619 0-.585.068-1.157.198-1.706L2.000 8.526C2.000 9.773 2.000 10.84 2.000 12.000z" />
          <path d="M12.000 22.000c-3.483 0-6.425-1.156-8.526-3.078l2.827-2.196c1.077.72 2.378 1.156 3.699 1.156 2.019 0 3.754-.954 4.862-2.355l2.215 1.713C17.653 20.444 15.011 22.000 12.000 22.000z" />
          <path d="M20.000 12.000c0-.585-.068-1.157-.198-1.706l-1.597-1.237c.72-1.077 1.156-2.378 1.156-3.699 0-.585-.068-1.157-.198-1.706l2.196-2.827C21.827 7.394 22.000 9.61 22.000 12.000c0 1.258-.068 2.457-.202 3.619L20.000 16.516C20.000 16.516 20.000 12.000 20.000 12.000z" />
        </svg>
        <span className="text-sm font-semibold">Sign up with Google</span>
      </button>
    </div>
  );
}
