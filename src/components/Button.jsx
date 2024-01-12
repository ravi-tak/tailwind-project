export default function Button({
  children,
  backgroundColor,
  textColor,
  iconURL,
}) {
  return (
    <button
      className={`flex items-center gap-5 text-lg rounded-3xl px-6 py-3 font-montserrat ${
        backgroundColor ? `${backgroundColor}` : 'bg-coral-red'
      } ${textColor ? `${textColor}` : 'text-white-400'}`}
    >
      {children}
      {iconURL && (
        <div>
          <img
            src={iconURL}
            alt='arrow right'
          />
        </div>
      )}
    </button>
  )
}
