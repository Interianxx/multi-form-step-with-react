import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const steps = [
  "Información del paquete",
  "Opciones de envío",
  "Detalles de envió",
  "Confirmación",
];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState("");

  const [policiesAccepted, setPoliciesAccepted] = React.useState({
    terms: false,
    privacy: false,
  });

  const validateStep = () => {
    let stepErrors = {};

    if (activeStep === 0) {
      const { largo, ancho, alto, peso, origen, destino } =
        formData.dimensiones;
      if (!largo) stepErrors.largo = "El largo es obligatorio.";
      if (!ancho) stepErrors.ancho = "El ancho es obligatorio.";
      if (!alto) stepErrors.alto = "El alto es obligatorio.";
      if (!peso) stepErrors.peso = "El peso es obligatorio.";
      if (!origen)
        stepErrors.origen = "El código postal de origen es obligatorio.";
      if (!destino)
        stepErrors.destino = "El código postal de destino es obligatorio.";
    }

    if (activeStep === 2) {
      const { remitente, destinatario } = formData;
      if (!remitente.nombre)
        stepErrors.remitenteNombre = "El nombre del remitente es obligatorio.";
      if (!remitente.telefono)
        stepErrors.remitenteTelefono =
          "El teléfono del remitente es obligatorio.";
      if (!remitente.correo)
        stepErrors.remitenteCorreo = "El correo del remitente es obligatorio.";
      if (!remitente.direccion)
        stepErrors.remitenteDireccion =
          "La dirección del remitente es obligatoria.";
      if (!destinatario.nombre)
        stepErrors.destinatarioNombre =
          "El nombre del destinatario es obligatorio.";
      if (!destinatario.telefono)
        stepErrors.destinatarioTelefono =
          "El teléfono del destinatario es obligatorio.";
      if (!destinatario.correo)
        stepErrors.destinatarioCorreo =
          "El correo del destinatario es obligatorio.";
      if (!destinatario.direccion)
        stepErrors.destinatarioDireccion =
          "La dirección del destinatario es obligatoria.";
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [formData, setFormData] = React.useState({
    dimensiones: {
      largo: "",
      ancho: "",
      alto: "",
      peso: "",
      origen: "",
      destino: "",
    },
    remitente: {
      nombre: "",
      telefono: "",
      correo: "",
      direccion: "",
    },
    destinatario: {
      nombre: "",
      telefono: "",
      correo: "",
      direccion: "",
    },
  });

  const [errors, setErrors] = React.useState({});

  const renderFormStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <Box>
            <Typography variant="h6" gutterBottom sx={{ paddingTop: "12px" }}>
              Dimensiones del paquete
            </Typography>
            <Typography variant="body2" gutterBottom>
              Introduzca las dimensiones en centímetros.
            </Typography>
            <Grid container spacing={2} sx={{ padding: "16px 0" }}>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Largo (cm)"
                  variant="outlined"
                  type="number"
                  value={formData.dimensiones.largo}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      dimensiones: {
                        ...prev.dimensiones,
                        largo: e.target.value,
                      },
                    }))
                  }
                  error={!!errors.largo}
                  helperText={errors.largo}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Ancho (cm)"
                  variant="outlined"
                  type="number"
                  value={formData.dimensiones.ancho}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      dimensiones: {
                        ...prev.dimensiones,
                        ancho: e.target.value,
                      },
                    }))
                  }
                  error={!!errors.ancho}
                  helperText={errors.ancho}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Alto (cm)"
                  variant="outlined"
                  type="number"
                  value={formData.dimensiones.alto}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      dimensiones: {
                        ...prev.dimensiones,
                        alto: e.target.value,
                      },
                    }))
                  }
                  error={!!errors.alto}
                  helperText={errors.alto}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Peso del paquete (kg)"
                  variant="outlined"
                  type="number"
                  value={formData.dimensiones.peso}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      dimensiones: {
                        ...prev.dimensiones,
                        peso: e.target.value,
                      },
                    }))
                  }
                  error={!!errors.peso}
                  helperText={errors.peso}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Código postal de origen"
                  variant="outlined"
                  value={formData.dimensiones.origen}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      dimensiones: {
                        ...prev.dimensiones,
                        origen: e.target.value,
                      },
                    }))
                  }
                  error={!!errors.origen}
                  helperText={errors.origen}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Código postal de destino"
                  variant="outlined"
                  value={formData.dimensiones.destino}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      dimensiones: {
                        ...prev.dimensiones,
                        destino: e.target.value,
                      },
                    }))
                  }
                  error={!!errors.destino}
                  helperText={errors.destino}
                />
              </Grid>
            </Grid>
          </Box>
        );

      case 1:
        const handleSelectionChange = (event) => {
          setSelectedOption(event.target.value);
        };

        return (
          <Box>
            <Typography variant="h6" gutterBottom sx={{ paddingTop: "16px 0" }}>
              Opciones de envío disponibles
            </Typography>
            <Typography variant="body2" gutterBottom>
              Selecciona una opción de envío. Las tarifas incluyen servicios de
              recolección.
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    border: "1px solid #ccc",
                    borderRadius: 2,
                    p: 2,
                    mb: 2,
                    cursor: "pointer",
                    backgroundColor:
                      selectedOption === "standard" ? "#f0f0f0" : "#fff",
                  }}
                  onClick={() => setSelectedOption("standard")}
                >
                  <Typography variant="subtitle1">Servicio Estándar</Typography>
                  <Typography variant="body2">
                    Entrega en 5-7 días hábiles
                  </Typography>
                  <Typography variant="body2">Tarifa: $150 MXN</Typography>
                </Box>
                <Box
                  sx={{
                    border: "1px solid #ccc",
                    borderRadius: 2,
                    p: 2,
                    mb: 2,
                    cursor: "pointer",
                    backgroundColor:
                      selectedOption === "express" ? "#f0f0f0" : "#fff",
                  }}
                  onClick={() => setSelectedOption("express")}
                >
                  <Typography variant="subtitle1">Servicio Exprés</Typography>
                  <Typography variant="body2">
                    Entrega en 2-3 días hábiles
                  </Typography>
                  <Typography variant="body2">Tarifa: $300 MXN</Typography>
                </Box>
                <Box
                  sx={{
                    border: "1px solid #ccc",
                    borderRadius: 2,
                    p: 2,
                    mb: 2,
                    cursor: "pointer",
                    backgroundColor:
                      selectedOption === "sameDay" ? "#f0f0f0" : "#fff",
                  }}
                  onClick={() => setSelectedOption("sameDay")}
                >
                  <Typography variant="subtitle1">
                    Servicio Mismo Día
                  </Typography>
                  <Typography variant="body2">Entrega el mismo día</Typography>
                  <Typography variant="body2">Tarifa: $500 MXN</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        );

      case 2:
        return (
          <Box sx={{ padding: "0 0 16px 0" }}>
            <Typography variant="h6" gutterBottom sx={{ paddingTop: "16px 0" }}>
              Información de Envío
            </Typography>
            <Typography variant="body2" gutterBottom>
              Proporciona los datos detallados del remitente y destinatario.
            </Typography>
            <Box component="form" noValidate sx={{ mt: 2 }}>
              {/* Información del remitente */}
              <Typography variant="subtitle1" gutterBottom>
                Información del Remitente
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="remitente-nombre"
                    label="Nombre del remitente"
                    fullWidth
                    value={formData.remitente.nombre}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        remitente: {
                          ...prev.remitente,
                          nombre: e.target.value,
                        },
                      }))
                    }
                    error={!!errors.remitenteNombre}
                    helperText={errors.remitenteNombre}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="remitente-telefono"
                    label="Teléfono del remitente"
                    fullWidth
                    value={formData.remitente.telefono}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        remitente: {
                          ...prev.remitente,
                          telefono: e.target.value,
                        },
                      }))
                    }
                    error={!!errors.remitenteTelefono}
                    helperText={errors.remitenteTelefono}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="remitente-correo"
                    label="Correo electrónico del remitente"
                    fullWidth
                    value={formData.remitente.correo}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        remitente: {
                          ...prev.remitente,
                          correo: e.target.value,
                        },
                      }))
                    }
                    error={!!errors.remitenteCorreo}
                    helperText={errors.remitenteCorreo}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="remitente-direccion"
                    label="Dirección completa del remitente"
                    fullWidth
                    value={formData.remitente.direccion}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        remitente: {
                          ...prev.remitente,
                          direccion: e.target.value,
                        },
                      }))
                    }
                    error={!!errors.remitenteDireccion}
                    helperText={errors.remitenteDireccion}
                  />
                </Grid>
              </Grid>

              {/* Información del destinatario */}
              <Typography variant="subtitle1" gutterBottom sx={{ mt: 4 }}>
                Información del Destinatario
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="destinatario-nombre"
                    label="Nombre del destinatario"
                    fullWidth
                    value={formData.destinatario.nombre}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        destinatario: {
                          ...prev.destinatario,
                          nombre: e.target.value,
                        },
                      }))
                    }
                    error={!!errors.destinatarioNombre}
                    helperText={errors.destinatarioNombre}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="destinatario-telefono"
                    label="Teléfono del destinatario"
                    fullWidth
                    value={formData.destinatario.telefono}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        destinatario: {
                          ...prev.destinatario,
                          telefono: e.target.value,
                        },
                      }))
                    }
                    error={!!errors.destinatarioTelefono}
                    helperText={errors.destinatarioTelefono}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="destinatario-correo"
                    label="Correo electrónico del destinatario"
                    fullWidth
                    value={formData.destinatario.correo}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        destinatario: {
                          ...prev.destinatario,
                          correo: e.target.value,
                        },
                      }))
                    }
                    error={!!errors.destinatarioCorreo}
                    helperText={errors.destinatarioCorreo}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="destinatario-direccion"
                    label="Dirección completa del destinatario"
                    fullWidth
                    value={formData.destinatario.direccion}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        destinatario: {
                          ...prev.destinatario,
                          direccion: e.target.value,
                        },
                      }))
                    }
                    error={!!errors.destinatarioDireccion}
                    helperText={errors.destinatarioDireccion}
                  />
                </Grid>
              </Grid>

              {/* Cuadro de referencias */}
              <Typography variant="subtitle1" gutterBottom sx={{ mt: 4 }}>
                Referencias adicionales
              </Typography>
              <TextField
                id="referencias"
                label="Escribe referencias para localizar al destinatario (opcional)"
                multiline
                rows={4}
                fullWidth
              />
            </Box>
          </Box>
        );

      case 3:
        const handleCheckboxChange = (event) => {
          setPoliciesAccepted({
            ...policiesAccepted,
            [event.target.name]: event.target.checked,
          });
        };

        return (
          <Box sx={{ padding: "16px 0" }}>
            <Typography variant="h6" gutterBottom>
              Confirmación del Envío
            </Typography>
            <Typography variant="body2" gutterBottom>
              Por favor, revisa los datos ingresados y acepta nuestras políticas
              para proceder.
            </Typography>
            <Box sx={{ mt: 2 }}>
              {/* Resumen de los datos ingresados */}
              <Typography variant="subtitle1" gutterBottom>
                Resumen del Envío
              </Typography>
              <Typography variant="body2">
                {/* Aquí puedes incluir un resumen dinámico de la información */}
                Dimensiones: Largo x Ancho x Alto, Peso: X kg.
              </Typography>
              <Typography variant="body2">
                Servicio Seleccionado: Exprés
              </Typography>
            </Box>

            {/* Casillas para aceptar políticas */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="subtitle1" gutterBottom>
                Políticas
              </Typography>
              <Box>
                <label>
                  <input
                    type="checkbox"
                    name="terms"
                    checked={policiesAccepted.terms}
                    onChange={handleCheckboxChange}
                  />
                  Acepto los <a href="#">términos y condiciones</a>.
                </label>
              </Box>
              <Box>
                <label>
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={policiesAccepted.privacy}
                    onChange={handleCheckboxChange}
                  />
                  He leído y acepto la <a href="#">política de privacidad</a>.
                </label>
              </Box>
            </Box>

            {/* Mensaje de advertencia si no están marcadas las casillas */}
            {!policiesAccepted.terms || !policiesAccepted.privacy ? (
              <Typography variant="body2" color="error" sx={{ mt: 2 }}>
                Debes aceptar ambas políticas para continuar.
              </Typography>
            ) : null}
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1, padding: "16px 0" }}>
            El envío ha sido creado con éxito.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reiniciar</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ mt: 2, mb: 1 }}>{renderFormStep()}</Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Atrás
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
