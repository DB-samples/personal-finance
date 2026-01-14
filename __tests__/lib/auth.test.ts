import { getUser, signOut } from '@/lib/auth'

// Mock the utils/supabase/server module
jest.mock('@/utils/supabase/server', () => ({
    createClient: jest.fn(),
}))

const mockCreateClient = require('@/utils/supabase/server').createClient

describe('Auth Service', () => {
    let mockSupabase: any

    beforeEach(() => {
        mockSupabase = {
            auth: {
                getUser: jest.fn(),
                signOut: jest.fn(),
            },
        }
        mockCreateClient.mockResolvedValue(mockSupabase)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    describe('getUser', () => {
        it('should return the user', async () => {
            const mockUser = { id: '123', email: 'test@example.com' }
            mockSupabase.auth.getUser.mockResolvedValue({ data: { user: mockUser } })

            const user = await getUser()

            expect(user).toEqual(mockUser)
            expect(mockCreateClient).toHaveBeenCalled()
            expect(mockSupabase.auth.getUser).toHaveBeenCalled()
        })
    });

    describe('signOut', () => {
        it('should sign out', async () => {
            mockSupabase.auth.signOut.mockResolvedValue({ error: null })
            await signOut()
            expect(mockCreateClient).toHaveBeenCalled()
            expect(mockSupabase.auth.signOut).toHaveBeenCalled()
        })
    })
})
