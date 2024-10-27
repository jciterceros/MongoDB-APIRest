import User from '../schemas/User';

class CreateUserService {
    public async execute({ name, email, password }: User) {
        const user = {
            name,
            email,
            password
        }
        return user;
    }
}
export default CreateUserService;