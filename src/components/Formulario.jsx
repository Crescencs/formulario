import InputArea from './InputArea'
import titulo from '../assets/Styles/Main.css'

function Formulario() {
  const InputType = [
    {
      id: 'nombreFormulario',
      label: 'Nombre',
      type: 'text',
    },
    {
      id: 'apellidosFormulario',
      label: 'Apellidos',
      type: 'text',
    },
    {
      id: 'emailFormulario',
      label: 'Email',
      type: 'email',
    },
    {
      id: 'sexoTwoFormulario',
      label: 'Masculino',
      type: 'radio',
    },
    {
      id: 'sexoTwoFormulario',
      label: 'Femenino',
      type: 'radio',
    },
    {
      id: 'fechaNacFormulario',
      label: 'Fecha de Nacimiento',
      type: 'date',
    },
    {
      id: 'edadFormulario',
      label: 'Edad',
      type: 'number',
    },
    {
      id: 'telefonoFormulario',
      label: 'Telefono',
      type: 'tel',
    },
    {
      id: 'checkbosFormulario',
      label: 'Aceptar terminos y condiciones de la subscripcion',
      type: 'checkbox',
    },
  ]
  return (
    <>
      <h2>Suscribete</h2>
      {InputType.map((tipo) => {
        return <InputArea label={tipo.label} id={tipo.id} type={tipo.type} />
      })}
    </>
  )
}

export default Formulario
