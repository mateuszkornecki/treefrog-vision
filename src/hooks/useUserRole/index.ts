import UserRole from '@/enums/UserRole'
import {useSearchParams} from 'next/navigation'

function useUserRole(): UserRole {
    const searchParams= useSearchParams()
    const alfaTestPassword = searchParams.get('password')
    const isValidAlfaTestPassword = process.env.NEXT_PUBLIC_TEST_PASSWORD === alfaTestPassword

    //TODO Default behaviour will be to check is the user is logged on the therapist account,
    // but for now we will rely on the "password" searchParams to make it easier, at least in the MVP

    return isValidAlfaTestPassword ? UserRole.Therapist : UserRole.Patient
}