import './style.css'

type Props = {
    name: string;
}

export default function ButtonHeader({ name }: Props) {

  return (
    <button>
        {name}
    </button>
  )
}
