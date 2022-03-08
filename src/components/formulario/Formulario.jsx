import { Formik,Form,Field } from "formik";

const Formulario = () => {
    return ( 
        <div className="contenedor__titleForm">
          <h3 className="titleForm">Agregar Cliente</h3>
          <Formik>
              <Form>
                  <div>
                      <label>Nombre: </label>
                      <Field
                        type="text"
                      />
                  </div>
                  <div>
                      <label>Empresa: </label>
                      <Field
                        type="text"
                      />
                  </div>
                  <div>
                      <label>E-mail: </label>
                      <Field
                        type="email"
                        className=""
                      />
                  </div>
                  <div>
                      <label>Telefono: </label>
                      <Field
                        type="tel"
                        className=""
                      />
                  </div>
                  <div>
                      <label>Notas: </label>
                      <Field
                        as="textarea"
                        type="text"
                        className=""
                      />
                  </div>
              </Form>
          </Formik>
        </div>
     );
}
 
export default Formulario;