import React from 'react'
import "./SecondPages.css"

import HomeSectionSecPag from '../../components/secondaryPages/HomeSectionSecPag';

import ParagraphSecPag from '../../components/secondaryPages/ParagraphSecPag';

export default function FrequentQuestions() {
    return (
        <div className='SecondPage_container'>
            <section className='SecondPage_container_section1'>
                <HomeSectionSecPag title="Preguntas frecuentes" />

                <article className='SecondPage_container_article1'>
                    <ParagraphSecPag b="Hice un pedido por la página ¿cómo lo modifico?" />
                    <ParagraphSecPag paragraph="Si querés cambiar algún dato de envío o de pago comunícate a " b="mail@joyasdeacero.com.ar"/>
                    <ParagraphSecPag paragraph="Si querés modificar un producto elegido y tu pedido es para envío no admitimos cambios, por lo tanto recomendamos estar seguros a la hora de finalizar la compra." />
                    <ParagraphSecPag paragraph="Si querés modificar un producto que elegiste y tu pedido es para retirar por el local, el cambio lo podes gestionar cuando retires la compra antes de abonar con una vendedora o en la línea de cajas." />
                    <br /><br />
                    <ParagraphSecPag b="¿Cómo utilizo mi cupón de descuento?" />
                    <ParagraphSecPag paragraph="Al finalizar la compra tenés que ir al ícono del carrito y seleccionar “FINALIZAR PEDIDO”. " />
                    <ParagraphSecPag paragraph="Después elegí una de las opciones de pago." />
                    <ParagraphSecPag paragraph="Si tenés un cupón de descuento agregalo abajo donde dice “aplicar código de descuento”" />
                    <br /><br />
                    <ParagraphSecPag b="¿El stock está actualizado?" />
                    <ParagraphSecPag paragraph="Puede suceder que al momento de realizar la compra veas el artículo disponible  y después te digamos que está faltante. " />
                    <ParagraphSecPag paragraph="Es importante tener en cuenta que la existencia de nuestros stock es actualizada las 24hs. Debido a los distintos pedidos generados en simultaneo en nuestra tienda online es probable que a veces no haya stock para ambos. Igualmente en caso que no este lo que compraste, lo más rápido posible, alguien de nuestros staff se comunicará con vos vía mail para comentarte sobre el inconveniente y llegar a una resolución" />
                    <br /><br />
                    <ParagraphSecPag b="¿Cómo se que está listo para retirar mi pedido?" />
                    <ParagraphSecPag paragraph="Es muy importante la lectura de nuestros mails. " />
                    <ParagraphSecPag paragraph="Cuando elijas “retiro en el local” te va a llegar un mail avisándote que está listo para retirar." />
                    <ParagraphSecPag paragraph="Cuando elijas “envío a sucursal o domicilio” te va a llegar un mail con el número de guía para que hagas el seguimiento y sepas cuando esté listo para retirar" />
                    <br /><br />
                    <ParagraphSecPag b="¿Cómo puedo hacer el seguimiento de mis pedidos?" />
                    <ParagraphSecPag paragraph="Iniciando sesión, selecciona mi cuenta, luego mis compras." />
                    <ParagraphSecPag paragraph="Cualquier consulta comunícate a " b="mail@joyasdeacero.com.ar"/>
                    <br /><br />
                    <ParagraphSecPag b="¿Cómo me registro?" />
                    <ParagraphSecPag paragraph="Entrá a nuestra web. Arriba a la derecha vas a encontrar un botón que dice “Crear una cuenta”. Sólo tenes que completar los campos que te pide. Es importante que pongas bien estos datos porque te contactaremos por ese medio." />
                    <br /><br />
                    <ParagraphSecPag b="Olvidé mi contraseña ¿cómo puedo restablecerla?" />
                    <ParagraphSecPag paragraph="Seleccionar iniciar sesión, entrar a ¿Olvidaste tu contraseña? Poné tu mail, el captcha y luego “restablecer contraseña” Por último revisá tu correo" />
                    <br /><br />
                    <ParagraphSecPag b="¿Cómo modifico el mail?" />
                    <ParagraphSecPag paragraph="Solamente podes hacer esta operación cuando no tengas una compra pendiente." />
                    <ParagraphSecPag paragraph="Para modificar el mail tenés que iniciar sesión con tu usuario actual, ir a mi cuenta, información de cuenta, editar, cambiar mail." />
                    <br /><br />
                    <ParagraphSecPag b="¿Cómo modifico mi dirección?" />
                    <ParagraphSecPag paragraph="Si todavía no hiciste tu compra para cambiar la dirección tenés que iniciar sesión con tu usuario actual, ir a mi cuenta, información de cuenta, y ahí elegís según tengas que cambiar la dirección de envío o de facturación. Podés configurar la cantidad de direcciones de envío que quieras y al momento de la compra seleccionar a dónde lo enviamos cada vez." />
                    <ParagraphSecPag paragraph="Si ya hiciste tu compra comunicate rápidamente a mail@joyasdeacero.com.ar para gestionar el cambio antes de que se despache" />
                    <br /><br />
                    <ParagraphSecPag b="¿Cómo modifico los datos de facturación?" />
                    <ParagraphSecPag paragraph="Iniciar sesión con tu usuario actual, ir a mi cuenta, información de cuenta, libreta de direcciones, dirección de facturación, editar dirección, luego modifico los campos deseados y selecciono guardar dirección." />
                </article>
            </section>
        </div>
    )
}
