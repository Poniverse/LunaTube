defmodule LunaTube.Role do
  use LunaTube.Web, :model

  schema "roles" do
    field :name, :string

    has_many :users, LunaTube.UserRole

    timestamps
  end

  @required_fields ~w(name)
  @optional_fields ~w()

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
  end
end