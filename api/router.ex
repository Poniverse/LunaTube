defmodule LunaTube.Router do
  use LunaTube.Web, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", LunaTube do
    pipe_through :api

    get "/", HelloWorld, :index

    get "/auth", AuthController, :index
    get "/auth/callback", AuthController, :callback

  end
end
