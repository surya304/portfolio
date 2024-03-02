import { Card } from './Card'
import { Section } from './Section'
import { SimpleLayout } from './SimpleLayout'

 
function ToolsSection({ pic_src,company_title, width,height,children, ...props }) {
  return (
    <Section {...props}>

<image 
  src={pic_src} 
  alt="Company Picture" 
  width={width} 
  height={height} 
  className='rounded-lg '
/>

<h1 className="text-2xl mt-3 font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 mb-5">
    {company_title}
    </h1>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, child_data, children}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>
        <ul role="list" className="space-y-4">
          {child_data.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export function Experience() {


   
  return (

    <SimpleLayout
      title="My Work Experience through the years"
      intro="
      Every project I have worked on has been a learning experience. I have been a part of many projects. Here are some of the stats of my work experience and projects I have worked on. "
      
    >
      <div className="space-y-20">
      <ToolsSection title="2021 - 2022" pic_src="images/videoform.webp" company_title='VideoForm' width={70} height={50} >

          <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
   full stack developer
    </h2>




          <p className="relative z-10 mt-1 text-sm text-zinc-600 dark:text-zinc-400" style={{'marginTop':'20px'}}>
         
          Played a key role in planning, developing, and managing a web application from the ground up. Enhanced the application to align with company goals and client feedback.    </p>
    <p className="relative z-10 mt-1 text-sm text-zinc-600 dark:text-zinc-400" style={{'marginTop':'20px'}}>
    Designed, built, and launched a JavaScript chatbot widget that can be embedded in websites to provide customized video responses to users.
    </p>



    <p className="relative z-10 mt-1 text-sm text-zinc-600 dark:text-zinc-400" style={{'marginTop':'20px'}}>
    Developed and integrated extensions with over 100 CRM platforms.
    </p>
    <p className="relative z-10 mt-1 text-sm text-zinc-600 dark:text-zinc-400" style={{'marginTop':'20px'}}>
    Took ownership of understanding client analytics needs. Built an analytics module for clients to monitor engagement with their feedback forms.
    </p>
    <p className="relative z-10 mt-1 text-sm text-zinc-600 dark:text-zinc-400" style={{'marginTop':'20px'}}>
    Solely responsible for developing an email messaging platform and associated analytics reporting.
    </p>
    <p className="relative z-10 mt-1 text-sm text-zinc-600 dark:text-zinc-400" style={{'marginTop':'20px'}}>
    Streamlined processes for recording, storing, and uploading videos to major platforms.
    </p>
    <p className="relative z-10 mt-1 text-sm text-zinc-600 dark:text-zinc-400" style={{'marginTop':'20px'}}>
    Collaborated on UI wireframes and interfaces to improve user experience.
    </p>
  
            </ToolsSection>
        

            <ToolsSection title="2019 - 2020" pic_src="images/gm.png" company_title='GreyMetrics' width={200} height={100}>
          <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
   Front End developer
    </h2>




          <p className="relative z-10 mt-1 text-sm text-zinc-600 dark:text-zinc-400" style={{'marginTop':'20px'}}>
         
          Developed 20-plus Social Media Integrations 
    </p>
    <p className="relative z-10 mt-1 text-sm text-zinc-600 dark:text-zinc-400" style={{'marginTop':'20px'}}>
     In charge of Developing website 
    </p>

    <p className="relative z-10 mt-1 text-sm text-zinc-600 dark:text-zinc-400" style={{'marginTop':'20px'}}>
     Involved in creating a Report Scheduling Module
    </p>
    <p className="relative z-10 mt-1 text-sm text-zinc-600 dark:text-zinc-400" style={{'marginTop':'20px'}}>
     Created Team member portal
    </p>
    <p className="relative z-10 mt-1 text-sm text-zinc-600 dark:text-zinc-400" style={{'marginTop':'20px'}}>
    Solely Responsible for Developing Analytics Module    </p>

  
            </ToolsSection>

            <ToolsSection title="2018 - 2019" pic_src="images/aquodigital.webp" company_title='Aquo Digital' width={80} height={100}>
          <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          Front End developer
    </h2>




          <p className="relative z-10 mt-1 text-sm text-zinc-600 dark:text-zinc-400" style={{'marginTop':'20px'}}>
         
          Developed responsive websites and web applications using HTML, CSS, JavaScript, jQuery, Node.js and MongoDB
    </p>
    <p className="relative z-10 mt-1 text-sm text-zinc-600 dark:text-zinc-400" style={{'marginTop':'20px'}}>
    Played a key role in developing, testing and launching a dynamic e-commerce website 
    <span>
      <a href="https://www.vijayadiagnostic.com/" className="text-teal-500 hover:underline underline"> Vijaya Diagnostic </a>
    </span>
      with an intuitive admin panel for client content management. Enabled non-technical users to update images, text and contacts.
    </p>
    <p className="relative z-10 mt-1 text-sm text-zinc-600 dark:text-zinc-400" style={{'marginTop':'20px'}}>
    Collaborated closely with three clients to understand their vision and incorporate ongoing feedback during the development process to ensure satisfaction.
    </p> <p className="relative z-10 mt-1 text-sm text-zinc-600 dark:text-zinc-400" style={{'marginTop':'20px'}}>
    Created a 50-page website for driver training courses
    <span>
      <a href="https://www.dubaidrivingcenter.net/" className="text-teal-500 hover:underline underline"> Dubai Driving Center </a>
    </span>
     using responsive design.
    </p> <p className="relative z-10 mt-1 text-sm text-zinc-600 dark:text-zinc-400" style={{'marginTop':'20px'}}>
    Leveraged MongoDB and AWS S3 to securely store sensitive medical patient data, implementing safety precautions.
    </p> <p className="relative z-10 mt-1 text-sm text-zinc-600 dark:text-zinc-400" style={{'marginTop':'20px'}}>
    Embedded a payment gateway for secure financial transactions.
    </p> 


  
            </ToolsSection>


      
   
      </div>
    </SimpleLayout>
  )
}
