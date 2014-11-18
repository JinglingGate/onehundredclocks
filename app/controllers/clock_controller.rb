class ClockController < ApplicationController
  def me
    render "pages/clock#{rand(6)+1}"
  end
end
