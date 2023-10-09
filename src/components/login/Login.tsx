import { Button } from '@mantine/core';

export default function Login() {
    return (
        <div className='formLogin'>
            <section className='sectionLogin'>
                <span className='textLogin'>Bem vindo</span>
                <form action="" method="post"
                autoComplete="off">
                    <div>
                        <input type="text" placeholder="digite o cpf" className='input' />
                    </div>
                    <div>
                        <input type="password" placeholder="digite a senha"  className='input' />
                    </div>
                    <div>
                    <Button variant="filled" className='buttonLogin'><span className='spanBottom'>Entrar</span></Button>
                    </div>
                </form>
            </section>
        </div>
    )
}
