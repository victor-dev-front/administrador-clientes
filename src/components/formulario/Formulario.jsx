import { Formik, Form, Field, ErrorMessage } from "formik";
import { postApi } from "../../services/enviarDatosCliente";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useContext } from "react";
import { DatasApiContext } from "../../context/DatasApiContext";

const Formulario = ({cliente}) => {

  const {setEstado,estado} = useContext(DatasApiContext);

  const navigate = useNavigate();

  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string()
               .required("El Nombre del Cliente es Obligatorio")
               .min(3, "El Nombre es muy Corto")
               .max(40, "El Nombre es muy Largo"),
    empresa: Yup.string()
                .required("El nombre de la empresa es Obligatorio"),
    email: Yup.string()
              .required("El Email del Cliente es Obligatorio")
              .email("Email no Valido"),
    telefono: Yup.number()
                 .typeError("Numero no Valido")
                 .integer("Numero no Valido")
                 .positive("Numero no Valido")
                 .required("El Numero del Cliente es Obligatorio"),
    notas: Yup.string()
              .required("La Nota es Obligatorio")
       
  });

    return ( 
        <div className="contenedor__titleForm">
          <h3 className="titleForm">{cliente.id ? "Modificar Cliente" : "Agregar Cliente"}</h3>
          <Formik

            //valores iniciales de mi obejto
            initialValues={{
              nombre: cliente?.nombre??"",
              empresa:cliente?.empresa??"",
              email:cliente?.email??"",
              telefono:cliente?.telefono??"",
              notas:cliente?.notas??""
            }}

            //shema de YUP
            validationSchema={nuevoClienteSchema}

            //para la parte de editar usuario
            enableReinitialize={true}
            
            //envio el formulario
            onSubmit={(values,{resetForm})=>{
              postApi(values,cliente);
              if(estado == true){
                setEstado(false)
              }else{
                setEstado(true);
              }
              resetForm();
              navigate("/clientes");
            }}
          >
            {({errors})=>(

              <Form>
                  <div className="camposForm">
                      <label>Nombre: </label>
                      <Field
                        type="text"
                        placeholder="Nombre del Cliente"
                        name="nombre" 
                      />
                      <ErrorMessage name="nombre" component={()=>(<p className="alerta">{errors.nombre}</p>)}/>
                  </div>
                  <div className="camposForm">
                      <label>Empresa: </label>
                      <Field
                        type="text"
                        placeholder="Empresa del Cliente"
                        name="empresa"
                      />
                      <ErrorMessage name="empresa" component={()=>(<p className="alerta">{errors.empresa}</p>)}/>
                  </div>
                  <div className="camposForm">
                      <label>E-mail: </label>
                      <Field
                        type="email"
                        placeholder="Email del Cliente"
                        name="email"
                      />
                      <ErrorMessage name="email" component={()=>(<p className="alerta">{errors.email}</p>)}/>
                  </div>
                  <div className="camposForm">
                      <label>Telefono: </label>
                      <Field
                        type="tel"
                        placeholder="Telefono del Cliente"
                        name="telefono"
                      />
                      <ErrorMessage name="telefono" component={()=>(<p className="alerta">{errors.telefono}</p>)}/>
                  </div>
                  <div className="camposForm">
                      <label>Notas: </label>
                      <Field
                        as="textarea"
                        type="text"
                        placeholder="Notas del Cliente"
                        name="notas"
                      />
                      <ErrorMessage name="notas" component={()=>(<p className="alerta">{errors.notas}</p>)}/>
                  </div>

                  <div className="campoBtn">
                      <button
                        type="submit"
                        className="btnForm"
                      >
                       {cliente.id ? "Guardar" : " Enviar"}
                      </button>
                  </div>
              </Form>

            )}
          </Formik>
        </div>
     );
}

// Especifica los valores por defecto de props:
Formulario.defaultProps = {
  cliente: {}
};
 
export default Formulario;