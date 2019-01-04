require 'socket'
server = TCPServer.new 5678

puts ("Server running at port 5678");
while session = server.accept
  request = session.gets
  puts request

  session.print "HTTP/1.1 200\r\n" # 1
  session.print "Content-Type: text/html\r\n" # 2
  session.print "\r\n" # 3
  session.print "<h2 style=\"text-align:center;font-family:verdana;\">Hello world! This is a Minimal Ruby HTTP Server</h2><p style=\"text-align:center;font-family:verdana;\">The time is #{Time.now}</p>" #4
  session.close
end