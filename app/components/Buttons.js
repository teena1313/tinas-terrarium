export function FilledButton({ children, href }) {
    return (
      <DefaultButton href = {href} style="bg-secondary-200 border-secondary-700 text-secondary-600 md:hover:bg-secondary-200 md:hover:border-secondary-900 md:hover:text-secondary-600">
        {children}
      </DefaultButton>
    );
  }
  
export function OutlinedButton({ children, href }) {
  return (
    <DefaultButton href = {href} style="border-primary-200 text-primary-200 md:hover:border-primary-400 md:hover:text-primary-400">
      {children}
    </DefaultButton>
  );
}

function DefaultButton({ children, href, style }) {
  return (
    <a
      href={href}
      className={`inline font-medium bg-transparent border rounded-full md:px-4 px-3.5 md:py-2 py-1.5 md:text-base text-sm transition-colors ${style}`}
    >
      {children}
    </a>
  );
}