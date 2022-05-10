import * as React from 'react';

import './VariantCard.css'

const VariantCard = () => {



  


  return (

     

    
      <section id='productos' className="VariantCard-container">
      <div class="cards card-1">
        <img src="https://img.icons8.com/dusk/50/000000/domain.png" />
        <h2>Desarrollo de Aplicaciones Web</h2>
        <p>Diseñamos, desarrollamos, integramos, administramos y damos mantenimiento y soporte a los diferentes aplicativos web, soluciones backend, desarrollos y bases de datos.</p>
        <button class="btns" onclick="window.location.href='/your-project'">Go to Your Website Dashboard
        </button>
      </div>

      <div class="cards card-1">
        <img src="https://img.icons8.com/dusk/64/000000/smm.png" />
        <h2>Desarrollo de aplicaciones móviles</h2>
        <p>Utilizamos las mejores tecnologías y creamos aplicativos a la medida de las necesidades de cada proyecto.</p>
        <button class="btns" onclick="window.location.href='https://app.socialpilot.co/client/link/index'">Go To Your Social Media Dashboard
        </button>
      </div>

      <div class="cards card-1">
        <img src="https://img.icons8.com/dusk/50/000000/task.png" />
        <h2>Project</h2>
        <p>Click here to view status updates and project progress.</p>
        <button class="btns" onclick="window.location.href='/your-project'">View Your Project(s)</button>

      </div>
      <div class="cards card-1">
        <img src="https://img.icons8.com/dusk/64/000000/calendar.png" />
        <h2>Calendar</h2>
        <p>Click here to view your tasks, events, and appointments.</p>
        <button class="btns" onclick="window.location.href='/your-calendar'">View Your Calendar</button>
      </div>

      <div class="cards card-1">
        <img src="https://img.icons8.com/dusk/64/000000/upload-to-cloud.png" />
        <h2>View & Upload Documents</h2>
        <p>Click here to view and securely upload documents.</p>
        <button class="btns" onclick="window.location.href='/files/home'">View & Upload Documents</button>
      </div>

      <div class="cards card-1">
        <img src="https://img.icons8.com/dusk/64/000000/online-payment-.png" />
        <h2>Billing</h2>
        <p>Click here to view and make payments on your invoice(s).</p>
        <button class="btns" onclick="window.location.href='/invoices/admin'">View Invocies & Make Payments</button>
      </div>

      <div class="cards card-1">
        <img src="https://img.icons8.com/dusk/64/000000/key.png" />
        <h2>Submit Login Credentials</h2>
        <p>Click here to securely send and update auxiliary account credentials.</p>
        <button class="btns" onclick="window.location.href='link_to_portal_page_here'">Submit Credentials</button>
      </div>

      <div class="cards card-1">
        <img src="https://img.icons8.com/dusk/64/000000/combo-chart.png" />
        <h2>Reports</h2>
        <p>Click here to view your website’s and marketing campaign reports.</p>
        <button class="btns" onclick="window.location.href='link_to_portal_page_here'">View My Reports</button>
      </div>

      <div class="cards card-1">
        <img src="https://img.icons8.com/dusk/64/000000/google-sites.png" />
        <h2>Resources & Training</h2>
        <p>Click here to access important tutorials and trainings.</p>
        <button class="btns" onclick="window.location.href='link_to_portal_page_here'">Go to Resources/Training</button>
      </div>

      <div class="cards card-1">
        <img src="https://img.icons8.com/dusk/50/000000/online-support--v2.png" />
        <h2>Emergency Support</h2>
        <p>Click here to get immediate assistance from our support team.</p>
        <button class="btns" onclick="window.location.href='/message/new'">Contact Us</button>
      </div>
      </section>
 
   
  )
};


export default VariantCard;