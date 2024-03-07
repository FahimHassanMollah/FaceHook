import { useNavigate } from "react-router-dom";
import Field from "../common/Field";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
    const {setAuth} = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const submitForm = (data) => {
        setAuth({
            user:{...data}
        });
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit(submitForm)} className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]">

            <div className="form-control">
                <Field label={"Email"} htmlFor={"email"} error={errors?.email}>
                    <input
                        className={`auth-input ${errors.email ? "border-red-500" : "border-gray-200"}`}
                        name="email"
                        type="email"
                        id="email"
                        {...register("email", { required: "Email is required" })}
                    />
                </Field>
            </div>

            <div className="form-control">
                <Field label="Password" error={errors.password}>
                    <input
                        {...register("password",
                            {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Your password must be at least 8 characters",
                                },
                            })
                        }
                        className={`auth-input ${errors.password ? "border-red-500" : "border-gray-200"}`}
                        type="password"
                        name="password"
                        id="password"
                    />
                </Field>
            </div>

            <Field>
            <button
                className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90">
                Login
            </button>
          </Field>
        </form>
    )
}

export default LoginForm