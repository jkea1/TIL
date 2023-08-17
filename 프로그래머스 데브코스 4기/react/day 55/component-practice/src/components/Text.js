import './Text.css'

const Text = ({
  children,
  size,
  block,
  paragraph,
  strong,
  underline,
  color,
  delete: del,
  mark,
  code,
  ...props
}) => {
  const Tag = block ? 'div' : paragraph ? 'p' : 'span' // 이렇게도 연산자를 사용하네?

  const fontStyle = {
    fontWeight: strong ? 'bold' : undefined,
    fontSize: typeof size === 'number' ? size : undefined,
    textDecoration: underline ? 'underline' : undefined,
    color,
  }

  if (mark) {
    children = <mark>{children}</mark>
  }

  if (code) {
    children = <code>{children}</code>
  }

  if (del) {
    children = <del>{children}</del>
  }

  return (
    <Tag
      className={typeof size === 'string' ? `Text--size-${size}` : undefined}
      style={{ ...props.style, ...fontStyle }}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Text
