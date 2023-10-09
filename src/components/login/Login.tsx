// import { Button } from '@mantine/core';
import { ChevronRight } from '@mui/icons-material';
import { Button, Input, TextField } from '@mui/material';
import image from '@/assets/logo.png';
import Image from "next/image";
export default function Login() {
    return (
        <div>
        <div className='flex items-center justify-center pb-3 mt-[20vh]' >
            <Image src={image} alt={'Imagem'} width={300} height={300}/>
        </div>
        <div className= "rounded-md flex items-center  justify-center bg-black">
            <section className="bg-white p-4 rounded-md w-[300px]">
                <span className="flex justify-center mb-4 text-[24px] text-gray-950">Bem vindo</span>
                <form action="" method="post"
                autoComplete="off">
                    <div>
                        <TextField  required id="standard-required" label="Digite o cpf" variant="standard" className='  text-gray-950 w-[100%] p-[10px] mb-[10px] rounded-sm' />
                    </div>
                    <div>
                        <TextField id="standard-password-input" label="Digite a senha" type="password" autoComplete="current-password" variant="standard" required  className='text-gray-950 w-[100%] p-[10px] mb-[10px] rounded-sm' />
                    </div>
                    <div>
                        <Button variant="outlined"  endIcon={<ChevronRight />}  className='rounded-md p-[10px] w-[100%] border-1 border-black text-gray-950'>Entrar</Button>
                    </div>
                </form>
            </section>
        </div>
        </div>
    )
}
