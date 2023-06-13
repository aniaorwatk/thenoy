interface ILinkToAnotherPageType {
  linkName?: string;
  linkHref: string;
  className?: string;
  children: React.ReactNode;
  key?: string;
}

const LinkToAnotherPage = ({
  linkName,
  linkHref,
  className,
  children,
  key,
}: ILinkToAnotherPageType) => {
  return (
    <a
      href={linkName === "Kontakt" ? `mailto:${linkHref}` : `${linkHref}`}
      key={key}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
};

export default LinkToAnotherPage;
