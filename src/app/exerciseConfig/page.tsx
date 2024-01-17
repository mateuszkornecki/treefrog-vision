"use client"

import ConfigItem from "@/components/ConfigItem"
import Configs from "@/components/Configs"

function Page(){

    return (
        <main>
            <Configs>
                <ConfigItem name={"Prędkość poruszania się obiektu:"}>
                    <input type={'range'}/>
                </ConfigItem>
            </Configs>
        </main>
    )
}

export default Page