//DEFINE ALL EXTERNAL IMPORT
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
// DEFINE ALL INTERNAL IMPORT
import styles from './animation.module.css'
import product from "../../../public/img/product_1.webp";
import { useParams } from 'next/navigation';

// DEFINE MAIN FUNCTION
const AnimatedCard = ({ data }) => {
  const [loading,setLoading]=useState(false)
  // DEFINE TITLE FUNCTION
  const Title = ({ children }) => {
    return (
      <td className="feature_name w-[50%]  text-md text-start font-semibold  " width="150">{children}	</td>
    )
  }
  // DEFINE SUBTITLE FUNCTION
  const SubTitle = ({ children }) => {
    return (
      <td className="w-[45%] text-sm text-end  " width="150">{children}	</td>
    )
  }
  console.log("fcgdgf",data)
  // DEFINE MAIN FUNCTION RETURN 
  return (
    <div className={styles.cardBox} key={data?.id}>
      <Image src={data?.image?.src} alt='img' width={data?.image?.width} height={data?.image?.height} className="h-full"/>
      <div className={styles.card}>
        <h2>{`${data.name.length <= 30 ? data.name.slice(0, 30) : data.name.slice(0, 30) + '...'}`}</h2>
        <span>{data.details[0].value.slice(0, 60)}</span>
        <div className={styles.content}>
          <tbody className="container_data gap-2">
            {data?.details?.map((item) => <tr key={item?.id} className="flex w-full justify-between items-start   ">
              <Title>{item?.label}</Title>
              <SubTitle>{item?.value}</SubTitle>
            </tr>)}
          </tbody>
        </div>
      </div>
    </div>
  )
}
// DEFINE MAIN FUNCTION EXPORT
export default AnimatedCard