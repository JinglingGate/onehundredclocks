class ClockController < ApplicationController
  def me
    render "pages/clock#{rand(7)+1}"
  end
end
