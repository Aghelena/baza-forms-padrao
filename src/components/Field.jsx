export function Field({ label, required, children, className = '' }) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="field-label">
        {label}{required && <span className="text-rosa ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}

export const Input = (props) => <input className="fi" {...props} />
export const Select = ({ children, ...props }) => (
  <select className="fi-sel" {...props}>{children}</select>
)
export const Textarea = (props) => <textarea className="fi-ta" {...props} />
