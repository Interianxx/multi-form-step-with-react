import './Steps.css';

const Steps = () => {
  const steps = [
    "Ingrese los detalles del paquete",
    "Seleccione el servicio de envío",
    "Complete la información del remitente y destinatario",
    "Revise y confirme su envío",
  ];

  return (
    <div className="steps">
      {steps.map((step, index) => (
        <div key={index} className="step">
          <h2>{index + 1}.</h2>
          <p>{step}</p>
        </div>
      ))}
    </div>
  );
};

export default Steps;
